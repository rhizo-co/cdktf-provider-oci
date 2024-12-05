# `dataOciDataLabelingServiceAnnotationFormats` Submodule <a name="`dataOciDataLabelingServiceAnnotationFormats` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataLabelingServiceAnnotationFormats <a name="DataOciDataLabelingServiceAnnotationFormats" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats oci_data_labeling_service_annotation_formats}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceAnnotationFormatsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#compartment_id DataOciDataLabelingServiceAnnotationFormats#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#id DataOciDataLabelingServiceAnnotationFormats#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#compartment_id DataOciDataLabelingServiceAnnotationFormats#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#filter DataOciDataLabelingServiceAnnotationFormats#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#id DataOciDataLabelingServiceAnnotationFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceAnnotationFormatsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataLabelingServiceAnnotationFormats resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataLabelingServiceAnnotationFormats resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataLabelingServiceAnnotationFormats to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataLabelingServiceAnnotationFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataLabelingServiceAnnotationFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.annotationFormatCollection">annotation_format_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList">DataOciDataLabelingServiceAnnotationFormatsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `annotation_format_collection`<sup>Required</sup> <a name="annotation_format_collection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.annotationFormatCollection"></a>

```python
annotation_format_collection: DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filter"></a>

```python
filter: DataOciDataLabelingServiceAnnotationFormatsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList">DataOciDataLabelingServiceAnnotationFormatsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceAnnotationFormatsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection()
```


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems()
```


### DataOciDataLabelingServiceAnnotationFormatsConfig <a name="DataOciDataLabelingServiceAnnotationFormatsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceAnnotationFormatsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#compartment_id DataOciDataLabelingServiceAnnotationFormats#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#id DataOciDataLabelingServiceAnnotationFormats#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#compartment_id DataOciDataLabelingServiceAnnotationFormats#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceAnnotationFormatsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#filter DataOciDataLabelingServiceAnnotationFormats#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#id DataOciDataLabelingServiceAnnotationFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataLabelingServiceAnnotationFormatsFilter <a name="DataOciDataLabelingServiceAnnotationFormatsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#name DataOciDataLabelingServiceAnnotationFormats#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#values DataOciDataLabelingServiceAnnotationFormats#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#regex DataOciDataLabelingServiceAnnotationFormats#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#name DataOciDataLabelingServiceAnnotationFormats#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#values DataOciDataLabelingServiceAnnotationFormats#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#regex DataOciDataLabelingServiceAnnotationFormats#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems</a>

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.items"></a>

```python
items: DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection</a>

---


### DataOciDataLabelingServiceAnnotationFormatsFilterList <a name="DataOciDataLabelingServiceAnnotationFormatsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataLabelingServiceAnnotationFormatsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>]]

---


### DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_labeling_service_annotation_formats

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataLabelingServiceAnnotationFormatsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>]

---



