# `dataOciCloudGuardDataSourceEvent` Submodule <a name="`dataOciCloudGuardDataSourceEvent` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDataSourceEvent <a name="DataOciCloudGuardDataSourceEvent" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event oci_cloud_guard_data_source_event}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_id: str,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#data_source_id DataOciCloudGuardDataSourceEvent#data_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#id DataOciCloudGuardDataSourceEvent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#region DataOciCloudGuardDataSourceEvent#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.dataSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#data_source_id DataOciCloudGuardDataSourceEvent#data_source_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#id DataOciCloudGuardDataSourceEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#region DataOciCloudGuardDataSourceEvent#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDataSourceEvent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudGuardDataSourceEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudGuardDataSourceEvent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudGuardDataSourceEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDataSourceEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList">DataOciCloudGuardDataSourceEventItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.dataSourceIdInput">data_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.items"></a>

```python
items: DataOciCloudGuardDataSourceEventItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList">DataOciCloudGuardDataSourceEventItemsList</a>

---

##### `data_source_id_input`<sup>Optional</sup> <a name="data_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.dataSourceIdInput"></a>

```python
data_source_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEvent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDataSourceEventConfig <a name="DataOciCloudGuardDataSourceEventConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_id: str,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#data_source_id DataOciCloudGuardDataSourceEvent#data_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#id DataOciCloudGuardDataSourceEvent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#region DataOciCloudGuardDataSourceEvent#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#data_source_id DataOciCloudGuardDataSourceEvent#data_source_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#id DataOciCloudGuardDataSourceEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_source_event#region DataOciCloudGuardDataSourceEvent#region}.

---

### DataOciCloudGuardDataSourceEventItems <a name="DataOciCloudGuardDataSourceEventItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItems()
```


### DataOciCloudGuardDataSourceEventItemsEventInfo <a name="DataOciCloudGuardDataSourceEventItemsEventInfo" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfo()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDataSourceEventItemsEventInfoList <a name="DataOciCloudGuardDataSourceEventItemsEventInfoList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference <a name="DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.dataSourceFeedProvider">data_source_feed_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.logResult">log_result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.observedValue">observed_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.triggerValue">trigger_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfo">DataOciCloudGuardDataSourceEventItemsEventInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source_feed_provider`<sup>Required</sup> <a name="data_source_feed_provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.dataSourceFeedProvider"></a>

```python
data_source_feed_provider: str
```

- *Type:* str

---

##### `log_result`<sup>Required</sup> <a name="log_result" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.logResult"></a>

```python
log_result: str
```

- *Type:* str

---

##### `observed_value`<sup>Required</sup> <a name="observed_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.observedValue"></a>

```python
observed_value: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `trigger_value`<sup>Required</sup> <a name="trigger_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.triggerValue"></a>

```python
trigger_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDataSourceEventItemsEventInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfo">DataOciCloudGuardDataSourceEventItemsEventInfo</a>

---


### DataOciCloudGuardDataSourceEventItemsList <a name="DataOciCloudGuardDataSourceEventItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardDataSourceEventItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardDataSourceEventItemsOutputReference <a name="DataOciCloudGuardDataSourceEventItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_data_source_event

dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.comments">comments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.eventDate">event_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.eventInfo">event_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList">DataOciCloudGuardDataSourceEventItemsEventInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItems">DataOciCloudGuardDataSourceEventItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comments`<sup>Required</sup> <a name="comments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.comments"></a>

```python
comments: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `event_date`<sup>Required</sup> <a name="event_date" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.eventDate"></a>

```python
event_date: str
```

- *Type:* str

---

##### `event_info`<sup>Required</sup> <a name="event_info" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.eventInfo"></a>

```python
event_info: DataOciCloudGuardDataSourceEventItemsEventInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsEventInfoList">DataOciCloudGuardDataSourceEventItemsEventInfoList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardDataSourceEventItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSourceEvent.DataOciCloudGuardDataSourceEventItems">DataOciCloudGuardDataSourceEventItems</a>

---



