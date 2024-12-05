# `dataOciCloudBridgeAsset` Submodule <a name="`dataOciCloudBridgeAsset` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeAsset <a name="DataOciCloudBridgeAsset" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset oci_cloud_bridge_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAsset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.assetId">asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset#asset_id DataOciCloudBridgeAsset#asset_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.Initializer.parameter.assetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset#asset_id DataOciCloudBridgeAsset#asset_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeAsset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudBridgeAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudBridgeAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudBridgeAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetSourceIds">asset_source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList">DataOciCloudBridgeAssetComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.externalAssetKey">external_asset_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.inventoryId">inventory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.sourceKey">source_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList">DataOciCloudBridgeAssetVmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vmwareVcenter">vmware_vcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList">DataOciCloudBridgeAssetVmwareVcenterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vmwareVm">vmware_vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList">DataOciCloudBridgeAssetVmwareVmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetIdInput">asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `asset_source_ids`<sup>Required</sup> <a name="asset_source_ids" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetSourceIds"></a>

```python
asset_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.compute"></a>

```python
compute: DataOciCloudBridgeAssetComputeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList">DataOciCloudBridgeAssetComputeList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_asset_key`<sup>Required</sup> <a name="external_asset_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.externalAssetKey"></a>

```python
external_asset_key: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inventory_id`<sup>Required</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.inventoryId"></a>

```python
inventory_id: str
```

- *Type:* str

---

##### `source_key`<sup>Required</sup> <a name="source_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.sourceKey"></a>

```python
source_key: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vm`<sup>Required</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vm"></a>

```python
vm: DataOciCloudBridgeAssetVmList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList">DataOciCloudBridgeAssetVmList</a>

---

##### `vmware_vcenter`<sup>Required</sup> <a name="vmware_vcenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vmwareVcenter"></a>

```python
vmware_vcenter: DataOciCloudBridgeAssetVmwareVcenterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList">DataOciCloudBridgeAssetVmwareVcenterList</a>

---

##### `vmware_vm`<sup>Required</sup> <a name="vmware_vm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.vmwareVm"></a>

```python
vmware_vm: DataOciCloudBridgeAssetVmwareVmList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList">DataOciCloudBridgeAssetVmwareVmList</a>

---

##### `asset_id_input`<sup>Optional</sup> <a name="asset_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetIdInput"></a>

```python
asset_id_input: str
```

- *Type:* str

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeAssetCompute <a name="DataOciCloudBridgeAssetCompute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetCompute.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetCompute()
```


### DataOciCloudBridgeAssetComputeDisks <a name="DataOciCloudBridgeAssetComputeDisks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisks()
```


### DataOciCloudBridgeAssetComputeGpuDevices <a name="DataOciCloudBridgeAssetComputeGpuDevices" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevices()
```


### DataOciCloudBridgeAssetComputeNics <a name="DataOciCloudBridgeAssetComputeNics" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNics()
```


### DataOciCloudBridgeAssetComputeNvdimmController <a name="DataOciCloudBridgeAssetComputeNvdimmController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmController.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmController()
```


### DataOciCloudBridgeAssetComputeNvdimms <a name="DataOciCloudBridgeAssetComputeNvdimms" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimms.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimms()
```


### DataOciCloudBridgeAssetComputeScsiController <a name="DataOciCloudBridgeAssetComputeScsiController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiController.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiController()
```


### DataOciCloudBridgeAssetConfig <a name="DataOciCloudBridgeAssetConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.assetId">asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset#asset_id DataOciCloudBridgeAsset#asset_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetConfig.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset#asset_id DataOciCloudBridgeAsset#asset_id}.

---

### DataOciCloudBridgeAssetVm <a name="DataOciCloudBridgeAssetVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVm.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVm()
```


### DataOciCloudBridgeAssetVmwareVcenter <a name="DataOciCloudBridgeAssetVmwareVcenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenter()
```


### DataOciCloudBridgeAssetVmwareVm <a name="DataOciCloudBridgeAssetVmwareVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVm.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVm()
```


### DataOciCloudBridgeAssetVmwareVmCustomerTags <a name="DataOciCloudBridgeAssetVmwareVmCustomerTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudBridgeAssetComputeDisksList <a name="DataOciCloudBridgeAssetComputeDisksList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetComputeDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetComputeDisksOutputReference <a name="DataOciCloudBridgeAssetComputeDisksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.bootOrder">boot_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.persistentMode">persistent_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs">size_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.uuidLun">uuid_lun</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisks">DataOciCloudBridgeAssetComputeDisks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_order`<sup>Required</sup> <a name="boot_order" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.bootOrder"></a>

```python
boot_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `persistent_mode`<sup>Required</sup> <a name="persistent_mode" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.persistentMode"></a>

```python
persistent_mode: str
```

- *Type:* str

---

##### `size_in_mbs`<sup>Required</sup> <a name="size_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs"></a>

```python
size_in_mbs: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `uuid_lun`<sup>Required</sup> <a name="uuid_lun" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.uuidLun"></a>

```python
uuid_lun: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetComputeDisks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisks">DataOciCloudBridgeAssetComputeDisks</a>

---


### DataOciCloudBridgeAssetComputeGpuDevicesList <a name="DataOciCloudBridgeAssetComputeGpuDevicesList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetComputeGpuDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetComputeGpuDevicesOutputReference <a name="DataOciCloudBridgeAssetComputeGpuDevicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer">manufacturer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs">memory_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevices">DataOciCloudBridgeAssetComputeGpuDevices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cores_count`<sup>Required</sup> <a name="cores_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer"></a>

```python
manufacturer: str
```

- *Type:* str

---

##### `memory_in_mbs`<sup>Required</sup> <a name="memory_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs"></a>

```python
memory_in_mbs: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetComputeGpuDevices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevices">DataOciCloudBridgeAssetComputeGpuDevices</a>

---


### DataOciCloudBridgeAssetComputeList <a name="DataOciCloudBridgeAssetComputeList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetComputeNicsList <a name="DataOciCloudBridgeAssetComputeNicsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetComputeNicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetComputeNicsOutputReference <a name="DataOciCloudBridgeAssetComputeNicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.macAddressType">mac_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.switchName">switch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNics">DataOciCloudBridgeAssetComputeNics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `mac_address_type`<sup>Required</sup> <a name="mac_address_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.macAddressType"></a>

```python
mac_address_type: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `switch_name`<sup>Required</sup> <a name="switch_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.switchName"></a>

```python
switch_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetComputeNics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNics">DataOciCloudBridgeAssetComputeNics</a>

---


### DataOciCloudBridgeAssetComputeNvdimmControllerList <a name="DataOciCloudBridgeAssetComputeNvdimmControllerList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference <a name="DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber">bus_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmController">DataOciCloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bus_number`<sup>Required</sup> <a name="bus_number" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber"></a>

```python
bus_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetComputeNvdimmController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmController">DataOciCloudBridgeAssetComputeNvdimmController</a>

---


### DataOciCloudBridgeAssetComputeNvdimmsList <a name="DataOciCloudBridgeAssetComputeNvdimmsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetComputeNvdimmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetComputeNvdimmsOutputReference <a name="DataOciCloudBridgeAssetComputeNvdimmsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey">controller_key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber">unit_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimms">DataOciCloudBridgeAssetComputeNvdimms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `controller_key`<sup>Required</sup> <a name="controller_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey"></a>

```python
controller_key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `unit_number`<sup>Required</sup> <a name="unit_number" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber"></a>

```python
unit_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetComputeNvdimms
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimms">DataOciCloudBridgeAssetComputeNvdimms</a>

---


### DataOciCloudBridgeAssetComputeOutputReference <a name="DataOciCloudBridgeAssetComputeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.connectedNetworks">connected_networks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.cpuModel">cpu_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.disks">disks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList">DataOciCloudBridgeAssetComputeDisksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.disksCount">disks_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.firmware">firmware</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.gpuDevices">gpu_devices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList">DataOciCloudBridgeAssetComputeGpuDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.gpuDevicesCount">gpu_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.guestState">guest_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.hardwareVersion">hardware_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.isPmemEnabled">is_pmem_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.isTpmEnabled">is_tpm_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.latencySensitivity">latency_sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.memoryInMbs">memory_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nics">nics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList">DataOciCloudBridgeAssetComputeNicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nicsCount">nics_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nvdimmController">nvdimm_controller</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList">DataOciCloudBridgeAssetComputeNvdimmControllerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nvdimms">nvdimms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList">DataOciCloudBridgeAssetComputeNvdimmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.operatingSystemVersion">operating_system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.pmemInMbs">pmem_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.powerState">power_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.primaryIp">primary_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.scsiController">scsi_controller</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList">DataOciCloudBridgeAssetComputeScsiControllerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs">storage_provisioned_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount">threads_per_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetCompute">DataOciCloudBridgeAssetCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connected_networks`<sup>Required</sup> <a name="connected_networks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.connectedNetworks"></a>

```python
connected_networks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cores_count`<sup>Required</sup> <a name="cores_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_model`<sup>Required</sup> <a name="cpu_model" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.cpuModel"></a>

```python
cpu_model: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disks`<sup>Required</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.disks"></a>

```python
disks: DataOciCloudBridgeAssetComputeDisksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeDisksList">DataOciCloudBridgeAssetComputeDisksList</a>

---

##### `disks_count`<sup>Required</sup> <a name="disks_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.disksCount"></a>

```python
disks_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.firmware"></a>

```python
firmware: str
```

- *Type:* str

---

##### `gpu_devices`<sup>Required</sup> <a name="gpu_devices" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.gpuDevices"></a>

```python
gpu_devices: DataOciCloudBridgeAssetComputeGpuDevicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeGpuDevicesList">DataOciCloudBridgeAssetComputeGpuDevicesList</a>

---

##### `gpu_devices_count`<sup>Required</sup> <a name="gpu_devices_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.gpuDevicesCount"></a>

```python
gpu_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `guest_state`<sup>Required</sup> <a name="guest_state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.guestState"></a>

```python
guest_state: str
```

- *Type:* str

---

##### `hardware_version`<sup>Required</sup> <a name="hardware_version" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.hardwareVersion"></a>

```python
hardware_version: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `is_pmem_enabled`<sup>Required</sup> <a name="is_pmem_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.isPmemEnabled"></a>

```python
is_pmem_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_tpm_enabled`<sup>Required</sup> <a name="is_tpm_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.isTpmEnabled"></a>

```python
is_tpm_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `latency_sensitivity`<sup>Required</sup> <a name="latency_sensitivity" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.latencySensitivity"></a>

```python
latency_sensitivity: str
```

- *Type:* str

---

##### `memory_in_mbs`<sup>Required</sup> <a name="memory_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.memoryInMbs"></a>

```python
memory_in_mbs: str
```

- *Type:* str

---

##### `nics`<sup>Required</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nics"></a>

```python
nics: DataOciCloudBridgeAssetComputeNicsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNicsList">DataOciCloudBridgeAssetComputeNicsList</a>

---

##### `nics_count`<sup>Required</sup> <a name="nics_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nicsCount"></a>

```python
nics_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvdimm_controller`<sup>Required</sup> <a name="nvdimm_controller" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nvdimmController"></a>

```python
nvdimm_controller: DataOciCloudBridgeAssetComputeNvdimmControllerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmControllerList">DataOciCloudBridgeAssetComputeNvdimmControllerList</a>

---

##### `nvdimms`<sup>Required</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.nvdimms"></a>

```python
nvdimms: DataOciCloudBridgeAssetComputeNvdimmsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeNvdimmsList">DataOciCloudBridgeAssetComputeNvdimmsList</a>

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `operating_system_version`<sup>Required</sup> <a name="operating_system_version" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.operatingSystemVersion"></a>

```python
operating_system_version: str
```

- *Type:* str

---

##### `pmem_in_mbs`<sup>Required</sup> <a name="pmem_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.pmemInMbs"></a>

```python
pmem_in_mbs: str
```

- *Type:* str

---

##### `power_state`<sup>Required</sup> <a name="power_state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.powerState"></a>

```python
power_state: str
```

- *Type:* str

---

##### `primary_ip`<sup>Required</sup> <a name="primary_ip" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.primaryIp"></a>

```python
primary_ip: str
```

- *Type:* str

---

##### `scsi_controller`<sup>Required</sup> <a name="scsi_controller" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.scsiController"></a>

```python
scsi_controller: DataOciCloudBridgeAssetComputeScsiControllerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList">DataOciCloudBridgeAssetComputeScsiControllerList</a>

---

##### `storage_provisioned_in_mbs`<sup>Required</sup> <a name="storage_provisioned_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs"></a>

```python
storage_provisioned_in_mbs: str
```

- *Type:* str

---

##### `threads_per_core_count`<sup>Required</sup> <a name="threads_per_core_count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount"></a>

```python
threads_per_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetCompute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetCompute">DataOciCloudBridgeAssetCompute</a>

---


### DataOciCloudBridgeAssetComputeScsiControllerList <a name="DataOciCloudBridgeAssetComputeScsiControllerList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetComputeScsiControllerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetComputeScsiControllerOutputReference <a name="DataOciCloudBridgeAssetComputeScsiControllerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus">shared_bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber">unit_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiController">DataOciCloudBridgeAssetComputeScsiController</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `shared_bus`<sup>Required</sup> <a name="shared_bus" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus"></a>

```python
shared_bus: str
```

- *Type:* str

---

##### `unit_number`<sup>Required</sup> <a name="unit_number" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber"></a>

```python
unit_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetComputeScsiController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetComputeScsiController">DataOciCloudBridgeAssetComputeScsiController</a>

---


### DataOciCloudBridgeAssetVmList <a name="DataOciCloudBridgeAssetVmList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetVmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetVmOutputReference <a name="DataOciCloudBridgeAssetVmOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorHost">hypervisor_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorVendor">hypervisor_vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorVersion">hypervisor_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVm">DataOciCloudBridgeAssetVm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hypervisor_host`<sup>Required</sup> <a name="hypervisor_host" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorHost"></a>

```python
hypervisor_host: str
```

- *Type:* str

---

##### `hypervisor_vendor`<sup>Required</sup> <a name="hypervisor_vendor" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorVendor"></a>

```python
hypervisor_vendor: str
```

- *Type:* str

---

##### `hypervisor_version`<sup>Required</sup> <a name="hypervisor_version" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.hypervisorVersion"></a>

```python
hypervisor_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVm">DataOciCloudBridgeAssetVm</a>

---


### DataOciCloudBridgeAssetVmwareVcenterList <a name="DataOciCloudBridgeAssetVmwareVcenterList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetVmwareVcenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetVmwareVcenterOutputReference <a name="DataOciCloudBridgeAssetVmwareVcenterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter">data_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey">vcenter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion">vcenter_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenter">DataOciCloudBridgeAssetVmwareVcenter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_center`<sup>Required</sup> <a name="data_center" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter"></a>

```python
data_center: str
```

- *Type:* str

---

##### `vcenter_key`<sup>Required</sup> <a name="vcenter_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey"></a>

```python
vcenter_key: str
```

- *Type:* str

---

##### `vcenter_version`<sup>Required</sup> <a name="vcenter_version" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion"></a>

```python
vcenter_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenterOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetVmwareVcenter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVcenter">DataOciCloudBridgeAssetVmwareVcenter</a>

---


### DataOciCloudBridgeAssetVmwareVmCustomerTagsList <a name="DataOciCloudBridgeAssetVmwareVmCustomerTagsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference <a name="DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTags">DataOciCloudBridgeAssetVmwareVmCustomerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetVmwareVmCustomerTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTags">DataOciCloudBridgeAssetVmwareVmCustomerTags</a>

---


### DataOciCloudBridgeAssetVmwareVmList <a name="DataOciCloudBridgeAssetVmwareVmList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetVmwareVmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetVmwareVmOutputReference <a name="DataOciCloudBridgeAssetVmwareVmOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset

dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.customerFields">customer_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.customerTags">customer_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList">DataOciCloudBridgeAssetVmwareVmCustomerTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth">fault_tolerance_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency">fault_tolerance_secondary_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState">fault_tolerance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.instanceUuid">instance_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled">is_disks_cbt_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled">is_disks_uuid_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus">vmware_tools_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVm">DataOciCloudBridgeAssetVmwareVm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `customer_fields`<sup>Required</sup> <a name="customer_fields" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.customerFields"></a>

```python
customer_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_tags`<sup>Required</sup> <a name="customer_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.customerTags"></a>

```python
customer_tags: DataOciCloudBridgeAssetVmwareVmCustomerTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmCustomerTagsList">DataOciCloudBridgeAssetVmwareVmCustomerTagsList</a>

---

##### `fault_tolerance_bandwidth`<sup>Required</sup> <a name="fault_tolerance_bandwidth" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth"></a>

```python
fault_tolerance_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_tolerance_secondary_latency`<sup>Required</sup> <a name="fault_tolerance_secondary_latency" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency"></a>

```python
fault_tolerance_secondary_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fault_tolerance_state`<sup>Required</sup> <a name="fault_tolerance_state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState"></a>

```python
fault_tolerance_state: str
```

- *Type:* str

---

##### `instance_uuid`<sup>Required</sup> <a name="instance_uuid" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.instanceUuid"></a>

```python
instance_uuid: str
```

- *Type:* str

---

##### `is_disks_cbt_enabled`<sup>Required</sup> <a name="is_disks_cbt_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled"></a>

```python
is_disks_cbt_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_disks_uuid_enabled`<sup>Required</sup> <a name="is_disks_uuid_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled"></a>

```python
is_disks_uuid_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `vmware_tools_status`<sup>Required</sup> <a name="vmware_tools_status" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus"></a>

```python
vmware_tools_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVmOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetVmwareVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAsset.DataOciCloudBridgeAssetVmwareVm">DataOciCloudBridgeAssetVmwareVm</a>

---



