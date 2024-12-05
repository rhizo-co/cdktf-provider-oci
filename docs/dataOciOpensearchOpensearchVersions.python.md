# `dataOciOpensearchOpensearchVersions` Submodule <a name="`dataOciOpensearchOpensearchVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpensearchOpensearchVersions <a name="DataOciOpensearchOpensearchVersions" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions oci_opensearch_opensearch_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchVersionsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#compartment_id DataOciOpensearchOpensearchVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter">DataOciOpensearchOpensearchVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#id DataOciOpensearchOpensearchVersions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#compartment_id DataOciOpensearchOpensearchVersions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter">DataOciOpensearchOpensearchVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#filter DataOciOpensearchOpensearchVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#id DataOciOpensearchOpensearchVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchVersionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter">DataOciOpensearchOpensearchVersionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpensearchOpensearchVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpensearchOpensearchVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpensearchOpensearchVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpensearchOpensearchVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpensearchOpensearchVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList">DataOciOpensearchOpensearchVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.opensearchVersionsCollection">opensearch_versions_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList">DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter">DataOciOpensearchOpensearchVersionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.filter"></a>

```python
filter: DataOciOpensearchOpensearchVersionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList">DataOciOpensearchOpensearchVersionsFilterList</a>

---

##### `opensearch_versions_collection`<sup>Required</sup> <a name="opensearch_versions_collection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.opensearchVersionsCollection"></a>

```python
opensearch_versions_collection: DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList">DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter">DataOciOpensearchOpensearchVersionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpensearchOpensearchVersionsConfig <a name="DataOciOpensearchOpensearchVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchVersionsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#compartment_id DataOciOpensearchOpensearchVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter">DataOciOpensearchOpensearchVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#id DataOciOpensearchOpensearchVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#compartment_id DataOciOpensearchOpensearchVersions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter">DataOciOpensearchOpensearchVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#filter DataOciOpensearchOpensearchVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#id DataOciOpensearchOpensearchVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOpensearchOpensearchVersionsFilter <a name="DataOciOpensearchOpensearchVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#name DataOciOpensearchOpensearchVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#values DataOciOpensearchOpensearchVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#regex DataOciOpensearchOpensearchVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#name DataOciOpensearchOpensearchVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#values DataOciOpensearchOpensearchVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_versions#regex DataOciOpensearchOpensearchVersions#regex}.

---

### DataOciOpensearchOpensearchVersionsOpensearchVersionsCollection <a name="DataOciOpensearchOpensearchVersionsOpensearchVersionsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollection()
```


### DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItems <a name="DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpensearchOpensearchVersionsFilterList <a name="DataOciOpensearchOpensearchVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpensearchOpensearchVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter">DataOciOpensearchOpensearchVersionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOpensearchOpensearchVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter">DataOciOpensearchOpensearchVersionsFilter</a>]]

---


### DataOciOpensearchOpensearchVersionsFilterOutputReference <a name="DataOciOpensearchOpensearchVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter">DataOciOpensearchOpensearchVersionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOpensearchOpensearchVersionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsFilter">DataOciOpensearchOpensearchVersionsFilter</a>]

---


### DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList <a name="DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference <a name="DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItems">DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItems">DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItems</a>

---


### DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList <a name="DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference <a name="DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_versions

dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList">DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollection">DataOciOpensearchOpensearchVersionsOpensearchVersionsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.property.items"></a>

```python
items: DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList">DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpensearchOpensearchVersionsOpensearchVersionsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchVersions.DataOciOpensearchOpensearchVersionsOpensearchVersionsCollection">DataOciOpensearchOpensearchVersionsOpensearchVersionsCollection</a>

---



